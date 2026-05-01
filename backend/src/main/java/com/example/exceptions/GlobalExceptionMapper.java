package com.example.exceptions;

import java.util.Map;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class GlobalExceptionMapper implements ExceptionMapper<Throwable> {
    @Override
    public Response toResponse(Throwable e) {
        // In lỗi ra terminal của mvn quarkus:dev để bạn kiểm tra
        e.printStackTrace(); 
        return Response.status(500)
                .entity(Map.of("error", "Lỗi server: " + e.getMessage()))
                .build();
    }
}