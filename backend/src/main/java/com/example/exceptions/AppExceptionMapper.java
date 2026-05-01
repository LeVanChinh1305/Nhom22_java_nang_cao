package com.example.exceptions;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import java.util.Map;

@Provider
public class AppExceptionMapper implements ExceptionMapper<AppException> {
    @Override
    public Response toResponse(AppException e) {
        // Trả về mã lỗi (400, 404, 409...) và thông báo cụ thể cho Frontend
        return Response.status(e.getCode())
                .entity(Map.of("error", e.getMessage()))
                .build();
    }
}