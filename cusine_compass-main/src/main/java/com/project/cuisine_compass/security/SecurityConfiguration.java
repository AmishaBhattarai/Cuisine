package com.project.cuisine_compass.security;

import com.project.cuisine_compass.user.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtRequestFilter jwtRequestFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors().and().csrf().disable()
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers(
                                        new AntPathRequestMatcher("/api/auth/register"),
                                        new AntPathRequestMatcher("/api/auth/login"),
                                        new AntPathRequestMatcher("/api/auth/reset"),
                                        new AntPathRequestMatcher("/api/auth/reset-password"),
                                        new AntPathRequestMatcher("/"),
                                        new AntPathRequestMatcher("/api/carts/*"),
                                        new AntPathRequestMatcher("/api/menu/*"),
                                        new AntPathRequestMatcher("/cuisine/*"),
                                        new AntPathRequestMatcher("/menu/*"),
                                        new AntPathRequestMatcher("/v3/api-docs/**"),
                                        new AntPathRequestMatcher("/swagger-ui/**"),
                                        new AntPathRequestMatcher("/swagger-ui.html"),
                                        new AntPathRequestMatcher("/api/restaurant/**"),
                                        new AntPathRequestMatcher("/account/register/business"),
                                        new AntPathRequestMatcher("/api/admin/special-request"),
                                        new AntPathRequestMatcher("/cuisine/admin/**"),
                                        new AntPathRequestMatcher("/api/admin/special-request"),
                                        new AntPathRequestMatcher("/api/request/**"),
                                        new AntPathRequestMatcher("/api/menu/admin/**")

                                ).permitAll()
                                .requestMatchers(
                                        new AntPathRequestMatcher("/api/admin/**")
                                )
                                .hasAuthority(Role.ROLE_ADMIN.name())
                                .requestMatchers(
                                        new AntPathRequestMatcher("/account/superadmin/update/business/*"),
                                        new AntPathRequestMatcher("/account/superadmin/remove/*")
                                )
                                .hasAuthority(Role.ROLE_SUPER_ADMIN.name())
                                .anyRequest().authenticated()
                )
                .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}

