package BackEnd.controller;

import BackEnd.DTO.GigPackageDTO;
import BackEnd.service.GigPackageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path = "/gig-packages")
public class GigPackageController {
    private GigPackageService gigPackageService;

    //Post request to add a new package
    @PostMapping
    public ResponseEntity<GigPackageDTO> createPackage(@RequestBody GigPackageDTO servicePackageDTO) {
        GigPackageDTO savedPackage = gigPackageService.createPackage(servicePackageDTO);
        return new ResponseEntity<>(savedPackage, HttpStatus.CREATED);
    }

    //Get request to get all packages
    @GetMapping
    public ResponseEntity<List<GigPackageDTO>> getAllGigs() {
        List<GigPackageDTO> servicePackageDTO = gigPackageService.getAllPackages();
        return ResponseEntity.ok(servicePackageDTO);
    }

}
