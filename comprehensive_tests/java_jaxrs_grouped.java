package com.example.api;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.URI;

// JAX-RS Resource with Path prefix - should create grouped APIs
@Path("/api/v1")
public class UserResourceV1 {

    private HttpClient httpClient = HttpClient.newHttpClient();

    @GET
    @Path("/users")
    @Produces("application/json")
    public Response getUsers() {
        // Expected full_path: /api/v1/users
        // External API call
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://external-api.com/users"))
            .build();
        return Response.ok().build();
    }

    @POST
    @Path("/users")
    @Consumes("application/json")
    public Response createUser(String user) {
        // Expected full_path: /api/v1/users
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://validation-api.com/users"))
            .POST(HttpRequest.BodyPublishers.ofString(user))
            .build();
        return Response.status(201).build();
    }

    @GET
    @Path("/users/{id}")
    public Response getUser(@PathParam("id") String id) {
        // Expected full_path: /api/v1/users/{id}
        return Response.ok("user " + id).build();
    }

    @GET
    @Path("/posts")
    public Response getPosts() {
        // Expected full_path: /api/v1/posts
        return Response.ok("posts").build();
    }
}

// Another resource with different prefix
@Path("/api/v2") 
public class UserResourceV2 {

    @GET
    @Path("/users")
    public Response getUsers() {
        // Expected full_path: /api/v2/users
        return Response.ok("v2 users").build();
    }
}

// Resource without prefix (no grouping)
@Path("/health")
public class HealthResource {

    @GET
    public Response getHealth() {
        // Expected full_path: /health
        return Response.ok("healthy").build();
    }
}

// Another resource without prefix
@Path("/status")
public class StatusResource {

    @GET  
    public Response getStatus() {
        // Expected full_path: /status
        return Response.ok("ok").build();
    }
}