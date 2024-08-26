package com.project.cuisine_compass.account;

import com.project.cuisine_compass.auth.AuthController;
import com.project.cuisine_compass.exception.ServiceException;
import com.project.cuisine_compass.restaurant.Restaurant;
import com.project.cuisine_compass.restaurant.RestaurantRepo;
import com.project.cuisine_compass.user.Role;
import com.project.cuisine_compass.user.User;
import com.project.cuisine_compass.user.UserRepo;
import com.project.cuisine_compass.user.UserService;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AccountService {


    //add sl4j logger
    private final Logger logger = LoggerFactory.getLogger(AccountService.class);
    private final AccountRepo accountRepository;
    private final RestaurantRepo restaurantRepo;


    private final UserService userService;
    private final UserRepo userRepo;

    private final AccountMapper accountMapper;


    public AccountService(AccountRepo accountRepository, RestaurantRepo restaurantRepo, UserService userService, UserRepo userRepo, AccountMapper accountMapper) {
        this.accountRepository = accountRepository;
        this.restaurantRepo = restaurantRepo;
        this.userService = userService;
        this.userRepo = userRepo;
        this.accountMapper = accountMapper;
    }


    // Assuming you have a UserService and AccountService to handle user and account creation

    @Transactional
    public ResponseEntity<?> registerBusiness(AccountDto accountDto) {
        try {
            logger.debug("registering business with name : {}", accountDto.getBusinessName());
            Account account = new Account();
            account = accountMapper.accountDtoToAccount(accountDto);
            account.setState(Status.INACTIVE.name());
            Account savedAccount = accountRepository.save(account);

            User user = User.builder()
                    .id(savedAccount.getId())
                    .username(accountDto.getFullName())
                    .password(UUID.randomUUID().toString())
                    .email(accountDto.getEmail())
                    .phoneNumber(accountDto.getMobileNumber())
                    .role(Role.ROLE_ADMIN)
                    .build();
            userService.registerUser(user); // Assuming this method saves the user and handles the relationship

            // Create a Restaurant and associate it with the User
            Restaurant restaurant = new Restaurant();
            // Set restaurant properties...
            restaurant.setUser(user); // Associate the restaurant with the user
            user.addRestaurant(restaurant); // Add the restaurant to the user's list of restaurants
            // Save the restaurant (this might need to be adjusted based on your service layer)
            restaurantRepo.save(restaurant);

            return ResponseEntity.ok(savedAccount);
        } catch (DataAccessException e) {
            throw new ServiceException("Failed to register account", e);
        }
    }

    public ResponseEntity<?> deleteBusiness(Long accountId) {
        try {
            logger.debug("getting business with id : {}", accountId);
            Account account = accountRepository.findById(accountId).
                    orElseThrow(() -> new ServiceException("Account not found"));
            accountRepository.delete(account);
            return ResponseEntity.ok("Account deleted successfully");
        } catch (DataAccessException e) {
            throw new ServiceException("Failed to delete account", e);
        }
    }


    public List<Restaurant> findRestaurantByUserId(User user) {
        return restaurantRepo.findRestaurantsByAccountId(user);
    }

    public boolean approveBusiness(Long accountId) {
        try {
            logger.debug("approving business with id : {}", accountId);
            Account account = accountRepository.findById(accountId).
                    orElseThrow(() -> new ServiceException("Account not found"));
            account.setState(Status.ACTIVE.name());
            accountRepository.save(account);
            return true;
        } catch (DataAccessException e) {
            throw new ServiceException("Failed to approve account", e);
        }
    }
}