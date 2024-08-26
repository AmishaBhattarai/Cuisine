package com.project.cuisine_compass;

import com.project.cuisine_compass.cuisine.Cuisine;
import com.project.cuisine_compass.cuisine.CuisineRepository;
import com.project.cuisine_compass.menu.Menu;
import com.project.cuisine_compass.menu.MenuRepo;
import com.project.cuisine_compass.menu.MenuType;
import com.project.cuisine_compass.restaurant.Restaurant;
import com.project.cuisine_compass.restaurant.RestaurantRepo;
import com.project.cuisine_compass.user.Role;
import com.project.cuisine_compass.user.User;
import com.project.cuisine_compass.user.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
@Order(1)
public class BootStrapData implements CommandLineRunner {

    private final RestaurantRepo restaurantRepo;
    private final MenuRepo menuRepo;
    private final CuisineRepository cuisineRepository;
    private final UserRepo userRepo;

    @Value("${cuisine-compass.admin-mode:false}")
    private boolean adminMode;
    @Override
    public void run(String... args)  {
        if (!adminMode) {
            System.out.println("Data addition is not allowed in non-admin mode.");
            return;
        }

        addUser();
        addRestaurant();
    }

    private void addUser() {
        if (userRepo.count() > 0) {
            return;
        }

        List<User> users = List.of(
                User.builder().username("superadmin").email("superadmin@gmail.com").password("Admin@123").role(Role.ROLE_SUPER_ADMIN).build(),
                User.builder().username("user").email("user@gmail.com").password("User@123").role(Role.ROLE_USER).build(),
                User.builder().username("admin1").email("admin@gmail.com").password("Admin@123").role(Role.ROLE_ADMIN).build()
        );

        users = addUser(users);

    }


    private void addRestaurant() {
        if (restaurantRepo.count() > 0 || cuisineRepository.count() > 0 || menuRepo.count() > 0) {
            return;
        }

        List<Cuisine> cuisines = List.of(
                Cuisine.builder().name("Nepali").description("Nepali Cuisine").build(),
                Cuisine.builder().name("Chinese").description("Chinese Cuisine").build(),
                Cuisine.builder().name("Indian").description("Indian Cuisine").build(),
                Cuisine.builder().name("Italian").description("Italian Cuisine").build(),
                Cuisine.builder().name("Japanese").description("Japanese Cuisine").build(),
                Cuisine.builder().name("Korean").description("Korean Cuisine").build(),
                Cuisine.builder().name("Thai").description("Thai Cuisine").build(),
                Cuisine.builder().name("Vietnamese").description("Vietnamese Cuisine").build(),
                Cuisine.builder().name("Mexican").description("Mexican Cuisine").build()
        );
        cuisines = addCuisine(cuisines);

        List<Menu> menus = List.of(
                Menu.builder().name("Veg Momo").price(150.0).imageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/330px-Momo_nepal.jpg").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/chinese.glb").description("Nepali dumplings").menuType(MenuType.VEGETARIAN).cuisine(cuisines.get(0)).build(),
                Menu.builder().name("Chicken Momo").price(200.0).imageUrl("https://www.tripsavvy.com/thmb/gYRhS5rFVb3Xz3y7xvzY9FrExS4=/2120x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503908259-59493c463df78c537bf936d8.jpg").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/momo.glb").description("Nepali dumplings").menuType(MenuType.NON_VEGETARIAN).cuisine(cuisines.get(0)).build(),
                Menu.builder().name("Veg Noodle").price(150.0).imageUrl("https://th.bing.com/th/id/R.c3a6142da4323a7402b6c193d0a6b90b?rik=o1d593M4FsqOOA&pid=ImgRaw&r=0").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/noodle.glb  ").description("Nepali noodles").menuType(MenuType.VEGETARIAN).cuisine(cuisines.get(1)).build(),
                Menu.builder().name("Pasta").price(200.0).imageUrl("https://rukminim2.flixcart.com/image/832/832/kqe3low0/pasta/v/m/8/500-fusilli-pasta-500-gram-regular-sam-world-original-imag4f8ayhfkx7wa.jpeg?q=70&crop=false").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/pasta.glb").description("Nepali noodles").menuType(MenuType.NON_VEGETARIAN).cuisine(cuisines.get(1)).build(),
                Menu.builder().name("Pizza").price(250.0).imageUrl("https://th.bing.com/th/id/R.efd77f1f62879a68a2e76988c4811700?rik=9eMgduhN24YLyg&pid=ImgRaw&r=0").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/pizza.glb ").description("Nepali thali").menuType(MenuType.VEGETARIAN).cuisine(cuisines.get(2)).build(),
                Menu.builder().name("Chicken Thali").price(300.0).imageUrl("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/gikhxgh2gdq4nbu8krh8").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/chinese.glb  ").description("Nepali thali").menuType(MenuType.NON_VEGETARIAN).cuisine(cuisines.get(2)).build(),
                Menu.builder().name("chinese Thali").price(450.0).imageUrl("https://imgmediagumlet.lbb.in/media/2018/11/5bf3b09a590bbb6da9769ae3_1542697114683.jpg?fm=webp&w=250&h=250&dpr=2").model3dUrl("https://github.com/prabin693/gtlf-models/blob/main/chinese.glb   ").description("Nepali mutton thali").menuType(MenuType.VEGETARIAN).cuisine(cuisines.get(1)).build(),
                Menu.builder().name("Samosa Tarkari").price(100.0).imageUrl("https://th.bing.com/th/id/R.a87248cd0f965e7c7c41906641168f1d?rik=71CvT6dtWW1fmw&pid=ImgRaw&r=0").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/samosa.glb").description("Crispy and savoury triangles").menuType(MenuType.NON_VEGETARIAN).cuisine(cuisines.get(1)).build(),
                Menu.builder().name("soup").price(250.0).imageUrl("https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-6-1024x1536.jpg").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/soup.glb").description("South indian delicacy").menuType(MenuType.VEGETARIAN).cuisine(cuisines.get(3)).build(),
                Menu.builder().name("DHINDO").price(400.0).imageUrl("https://media-cdn.tripadvisor.com/media/photo-s/12/83/f7/40/dhindo-set.jpg").model3dUrl("https://github.com/prabin693/gtlf-models/raw/main/dhindo.glb ").description("Hyderabadi speciality").menuType(MenuType.NON_VEGETARIAN).cuisine(cuisines.get(3)).build()
        );

        menus = addMenu(menus);

        List<Restaurant> restaurantList = List.of(
                Restaurant.builder().name("KFC").description("Finger-lickin' good fried chicken").address("Kathmandu, Durbar Marg").image("https://d30v2pzvrfyzpo.cloudfront.net/images/chains/kfc-opengraph-1.jpg").phoneNumber("01-4411222").latitude(27.7119).longitude(85.3181).email("kfc@gmail.com").website("https://kfc.com").build(),
                Restaurant.builder().name("Burger King").description("Home of the Whopper").address("Lalitpur, Pulchowk").image("https://th.bing.com/th/id/OIP.CL23PPDFGKcsgSqm37-wGQHaEo?rs=1&pid=ImgDetMain").phoneNumber("01-4444333").latitude(27.6782).longitude(85.3169).email("burgerking@gmail.com").website("https://burgerking.com").build(),
                Restaurant.builder().name("Pizza Hut").description("The flavor of now").address("Patandhoka, Kathmandu").image("https://th.bing.com/th/id/OIP.NCdfnQiA9t4PPGJbWPbLMAHaF7?rs=1&pid=ImgDetMain").phoneNumber("01-4477555").latitude(27.6791).longitude(85.3214).email("pizzahut@gmail.com").website("https://pizzahut.com").build(),
                Restaurant.builder().name("Dominos").description("Pizza delivery experts").address("Lalitpur, Jawalakhel").image("https://th.bing.com/th/id/R.25b3ba92ea5a50bb87439653e7f113ac?rik=JBi2lqtQZ1kEhg&pid=ImgRaw&r=0").phoneNumber("01-4433666").latitude(27.6744).longitude(85.3123).email("dominos@gmail.com").website("https://dominos.com").build(),
                Restaurant.builder().name("Subway").description("Eat fresh").address("Kathmandu, Maharajgunj").image("subway.jpg").phoneNumber("01-4499888").latitude(27.7365).longitude(85.3304).email("subway@gmail.com").website("https://subway.com").build(),
                Restaurant.builder().name("Starbucks").description("Coffeehouse chain").address("Bhaktapur, Dattatraya Square").image("https://th.bing.com/th/id/OIP.WVn9kJqgw4WG0l1uOf-aUwHaFZ?rs=1&pid=ImgDetMain").phoneNumber("01-4411000").latitude(27.6735271).longitude(85.4344349).email("starbucks@gmail.com").website("https://starbucks.com").build(),
                Restaurant.builder().name("McDonalds").description("I'm lovin' it").address("Lalitpur, Lagankhel").image("https://th.bing.com/th/id/OIP.mfCbYDpGAnByuVFzraAXzwHaFj?rs=1&pid=ImgDetMain").phoneNumber("01-4488777").latitude(27.6660).longitude(85.3227).email("mcdonalds@gmail.com").website("https://mcdonalds.com").build(),
                Restaurant.builder().name("Taco Bell").description("Live mas").address("Kathmandu, Baluwatar").image("https://th.bing.com/th/id/R.ebceea96e77d1291c7b2e5691d543a14?rik=ZhNaBLaCEqWK9w&pid=ImgRaw&r=0").phoneNumber("01-4444555").latitude(27.7255).longitude(85.3298).email("tacobell@gmail.com").website("https://tacobell.com").build(),
                Restaurant.builder().name("Wendys").description("Quality is our recipe").address("Kathmandu, Boudha").image("https://th.bing.com/th/id/R.9faeffbbac7ef509a87bbfe2c7189df7?rik=LZtv7uFXMS7rbA&pid=ImgRaw&r=0").phoneNumber("01-4400222").latitude(27.7213).longitude(85.3575).email("wendys@gmail.com").website("https://wendys.com").build(),
                Restaurant.builder().name("Thakali Kitchen").description("Authentic Nepali cuisine").address("Lalitpur, Patan Durbar Square").image("https://th.bing.com/th/id/OIP.H3kOhba7f_KCGXpVaUj8-QExDM?rs=1&pid=ImgDetMain").phoneNumber("01-4499111").latitude(27.7213).longitude(85.3575).email("thakali@gmail.com").website("https://thakali.com").build(),
                Restaurant.builder().name("Newari Kitchen").description("Traditional Newari dishes").address("Bhaktapur, Suryabinayak").image("https://www.insidehimalayas.com/wp-content/uploads/2015/05/newari-food.jpg").phoneNumber("01-4422444").latitude(27.6563).longitude(85.4271).email("newari@gmail.com").website("https://newari.com").build(),
                Restaurant.builder().name("Thai Kitchen").description("Tantalizing Thai flavors").address("Patandhoka, Kathmandu").image("https://th.bing.com/th/id/R.4c8bc9464f253588092866dd0fa0ab0f?rik=OI39YCi6ckmfjw&pid=ImgRaw&r=0").phoneNumber("01-4488666").latitude(23.32).longitude(94.453).email("thai@gmail.com").website("https://thai.com").build(),
                Restaurant.builder().name("Momo Kitchen").description("Steaming hot momos").address("Patandhoka, Kathmandu").image("https://www.waiter.com/blog/wp-content/uploads/2014/09/Momo_nepal.jpg").phoneNumber("01-4411333").latitude(133.372).longitude(143.453).email("momo@gmail.com").website("https://momo.com").build()

        );
        //add menu inside restaurant
        List<Menu> finalMenus = menus;
        restaurantList.forEach(restaurant -> {
            restaurant.addMenu(finalMenus.get(0));
            restaurant.addMenu(finalMenus.get(1));
            restaurant.addMenu(finalMenus.get(2));
            restaurant.addMenu(finalMenus.get(3));
        });

        addRestaurant(restaurantList);
    }

    private List<User> addUser(List<User> users) {
        return userRepo.saveAll(users);
    }

    private List<Cuisine> addCuisine(List<Cuisine> cuisines) {
        return cuisineRepository.saveAll(cuisines);
    }

    private List<Menu> addMenu(List<Menu> menus) {
        return menuRepo.saveAll(menus);
    }

    private List<Restaurant> addRestaurant(List<Restaurant> restaurantList) {
        return restaurantRepo.saveAll(restaurantList);
    }
}
