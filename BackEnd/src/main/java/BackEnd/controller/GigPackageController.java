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
    public ResponseEntity<List<GigPackageDTO>> getAllPackages() {
        List<GigPackageDTO> servicePackageDTO = gigPackageService.getAllPackages();
        return ResponseEntity.ok(servicePackageDTO);
    }

    //Get request to get a package by id
    @GetMapping("/{packageId}")
    public ResponseEntity<GigPackageDTO> getPackageById(@PathVariable long packageId) {
        GigPackageDTO servicePackageDTO = gigPackageService.getPackageById(packageId);
        return new ResponseEntity<>(servicePackageDTO, HttpStatus.OK);
    }

    //Put request to update a package
    @PutMapping("/{packageId}")
    public ResponseEntity<GigPackageDTO> updatePackage(@PathVariable long packageId, @RequestBody GigPackageDTO updatedPackage) {
        GigPackageDTO servicePackageDTO = gigPackageService.updatePackage(packageId, updatedPackage);
        return ResponseEntity.ok(updatedPackage);
    }

    //Delete request to delete a package
    @DeleteMapping("/{packageId}")
    public ResponseEntity<?> deletePackage(@PathVariable long packageId) {
        gigPackageService.deletePackage(packageId);
        return ResponseEntity.ok("Package deleted successfully!");
    }

}
