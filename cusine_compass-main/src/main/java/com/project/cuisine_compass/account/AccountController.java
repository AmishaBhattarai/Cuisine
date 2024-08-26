package com.project.cuisine_compass.account;

import com.project.cuisine_compass.exception.ServiceException;
import com.project.cuisine_compass.user.RegisterUserDto;
import com.project.cuisine_compass.user.Role;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.hibernate.sql.ast.SqlTreeCreationLogger.LOGGER;

@RestController
@RequestMapping("/account")
public class AccountController {

    private final com.project.cuisine_compass.account.AccountService accountService;

    public AccountController(com.project.cuisine_compass.account.AccountService accountService) {
        this.accountService = accountService;
    }


    @PostMapping("/register/business")
    public ResponseEntity<?> registerBusiness(@RequestBody AccountDto accountDto) {
        try {
            accountService.registerBusiness(accountDto);
            return ResponseEntity.ok("Account registered successfully");
        } catch (ServiceException e) {
            LOGGER.error("Error registering account", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error registering account: " + e.getMessage());
        } catch (Exception e) {
            LOGGER.error("Unexpected error during registration", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error during registration");
        }
    }

    @DeleteMapping("/superadmin/remove/business/{accountId}")
    public ResponseEntity<?> deleteBusiness(@PathVariable Long accountId) {
        try {
            return ResponseEntity.ok(accountService.deleteBusiness(accountId));
        } catch (ServiceException e) {
            LOGGER.error("Error getting account", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        } catch (Exception e) {
            LOGGER.error("Unexpected error during getting account", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


    @PutMapping("/superadmin/update/business/{accountId}")
    public ResponseEntity<?> approveBusiness(@PathVariable Long accountId) {
        try {
            return ResponseEntity.ok(accountService.approveBusiness(accountId));
        } catch (ServiceException e) {
            LOGGER.error("Error getting account", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        } catch (Exception e) {
            LOGGER.error("Unexpected error during getting account", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
