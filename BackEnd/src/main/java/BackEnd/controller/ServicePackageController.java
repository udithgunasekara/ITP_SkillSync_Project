package BackEnd.controller;

import BackEnd.DTO.FreelancerGigsDTO;
import BackEnd.DTO.ServicePackageDTO;
import BackEnd.service.PackageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path = "/service-packages")
public class ServicePackageController {
    private PackageService packageService;

    //Post request to add a new package
    @PostMapping
    public ResponseEntity<ServicePackageDTO> createPackage(@RequestBody ServicePackageDTO servicePackageDTO) {
        ServicePackageDTO savedPackage = packageService.createPackage(servicePackageDTO);
        return new ResponseEntity<>(savedPackage, HttpStatus.CREATED);
    }

    //Get request to get all packages
    @GetMapping
    public ResponseEntity<List<ServicePackageDTO>> getAllGigs() {
        List<ServicePackageDTO> servicePackageDTO = packageService.getAllPackages();
        return ResponseEntity.ok(servicePackageDTO);
    }

}
