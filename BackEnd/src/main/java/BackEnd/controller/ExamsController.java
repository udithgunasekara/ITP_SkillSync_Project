package BackEnd.controller;


import BackEnd.DTO.ExamsDTO;
import BackEnd.service.ExamsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/api/exams")
public class ExamsController {

    private ExamsService examsService;

    //Build Create Exams REST API
    @PostMapping
    public ResponseEntity<ExamsDTO> createExam(@RequestBody ExamsDTO examsDTO){
        ExamsDTO savedExamDTO = examsService.createExam(examsDTO);
        return new ResponseEntity<>(savedExamDTO, HttpStatus.CREATED);
    }

    //Build Get Exams REST API
    @GetMapping("{id}")
    public ResponseEntity<ExamsDTO> getExamById(@PathVariable("id") Long examId){
        ExamsDTO examsDTO = examsService.getExamById(examId);
        return ResponseEntity.ok(examsDTO);
    }

    //Build Update Exams REST API
    @PutMapping("{id}")
    public ResponseEntity<ExamsDTO> updateExamById(@PathVariable("id") Long examId, @RequestBody ExamsDTO updatedExamsDTO){
        ExamsDTO examsDTO = examsService.updateExamById(examId, updatedExamsDTO);
        return ResponseEntity.ok(examsDTO);
    }

    //Build Delete Exams REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteExamById(@PathVariable("id") Long examid){
        examsService.deleteExamById(examid);
        return ResponseEntity.ok("Exam Deleted Successfully!");
    }

    //Build GetAll Exams REST API
    @GetMapping
    public ResponseEntity<List<ExamsDTO>> getAllExams(){
        List<ExamsDTO> examsDTO = examsService.getAllExams();
        return ResponseEntity.ok(examsDTO);
    }
}
