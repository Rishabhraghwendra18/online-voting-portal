package com.rishabhraghwendra.server.requestResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CommonResponse {
    private String message;
    private boolean error;
    private int statusCode;
}
