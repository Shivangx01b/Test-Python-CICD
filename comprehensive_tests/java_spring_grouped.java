package com.example.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

// Controller with class-level prefix - should create grouped APIs
@RestController
@RequestMapping("/api/v1")
public class UserControllerV1 {

    private RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/users")
    public String getUsers() {
        // Expected full_path: /api/v1/users
        String response = restTemplate.getForObject("https://external-api.com/users", String.class);
        return response;
    }

    @PostMapping("/users")  
    public String createUser(@RequestBody String user) {
        // Expected full_path: /api/v1/users
        restTemplate.postForObject("https://validation-api.com/users", user, String.class);
        return "created";
    }

    @GetMapping("/users/{id}")
    public String getUser(@PathVariable String id) {
        // Expected full_path: /api/v1/users/{id}
        return "user " + id;
    }

    @GetMapping("/posts")
    public String getPosts() {
        // Expected full_path: /api/v1/posts
        return "posts";
    }

    // Nested path
    @GetMapping("/users/{id}/posts")
    public String getUserPosts(@PathVariable String id) {
        // Expected full_path: /api/v1/users/{id}/posts
        return "user " + id + " posts";
    }
}

// Another controller with different prefix
@RestController  
@RequestMapping("/api/v2")
public class UserControllerV2 {

    @GetMapping("/users")
    public String getUsers() {
        // Expected full_path: /api/v2/users
        return "v2 users";
    }
}

// Controller without class-level prefix (no grouping)
@RestController
public class HealthController {

    @GetMapping("/health")
    public String getHealth() {
        // Expected full_path: /health
        return "healthy";
    }

    @GetMapping("/status")
    public String getStatus() {
        // Expected full_path: /status  
        return "ok";
    }
}