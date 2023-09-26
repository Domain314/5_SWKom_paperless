package io.swagger.api;

import java.io.File;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2023-09-26T13:26:43.806923267Z[GMT]")
@RestController
public class FilesApiController implements FilesApi {

    private static final Logger log = LoggerFactory.getLogger(FilesApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public FilesApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<File> deleteFile(@Parameter(in = ParameterIn.PATH, description = "Name to be deleted", required=true, schema=@Schema()) @PathVariable("name") String name) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<File>(objectMapper.readValue("{\n  \"size\" : 100,\n  \"data\" : \"\",\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"name\" : \"Testname_1\",\n  \"modified\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"id\" : 10,\n  \"type\" : \"pdf\"\n}", File.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<File>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<File>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<File>> findFiles() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<File>>(objectMapper.readValue("[ {\n  \"size\" : 100,\n  \"data\" : \"\",\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"name\" : \"Testname_1\",\n  \"modified\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"id\" : 10,\n  \"type\" : \"pdf\"\n}, {\n  \"size\" : 100,\n  \"data\" : \"\",\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"name\" : \"Testname_1\",\n  \"modified\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"id\" : 10,\n  \"type\" : \"pdf\"\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<File>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<File>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<File>> findFilesByName(@Parameter(in = ParameterIn.PATH, description = "Names for filtering", required=true, schema=@Schema()) @PathVariable("name") String name) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<File>>(objectMapper.readValue("[ {\n  \"size\" : 100,\n  \"data\" : \"\",\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"name\" : \"Testname_1\",\n  \"modified\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"id\" : 10,\n  \"type\" : \"pdf\"\n}, {\n  \"size\" : 100,\n  \"data\" : \"\",\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"name\" : \"Testname_1\",\n  \"modified\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"id\" : 10,\n  \"type\" : \"pdf\"\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<File>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<File>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<File> updateFile(@Parameter(in = ParameterIn.DEFAULT, description = "update a file", required=true, schema=@Schema()) @Valid @RequestBody File body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<File>(objectMapper.readValue("{\n  \"size\" : 100,\n  \"data\" : \"\",\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"name\" : \"Testname_1\",\n  \"modified\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"id\" : 10,\n  \"type\" : \"pdf\"\n}", File.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<File>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<File>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<File> uploadFile(@Parameter(in = ParameterIn.DEFAULT, description = "upload a new file", required=true, schema=@Schema()) @Valid @RequestBody File body) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<File>(objectMapper.readValue("{\n  \"size\" : 100,\n  \"data\" : \"\",\n  \"created\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"name\" : \"Testname_1\",\n  \"modified\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"id\" : 10,\n  \"type\" : \"pdf\"\n}", File.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<File>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<File>(HttpStatus.NOT_IMPLEMENTED);
    }

}
