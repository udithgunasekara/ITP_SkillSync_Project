package BackEnd.controller;

import BackEnd.DTO.publicNoticesDTO;
import BackEnd.service.publicNoticeServices;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/api/notices")
public class publicNoticesController {
    public publicNoticeServices publicNoticesServices;

    //url : http://localhost:8082/api/notices/allnotices
    @GetMapping("/allnotices")
    public ResponseEntity<List<publicNoticesDTO>> getAllNotices(){
        List<publicNoticesDTO> noticelist = publicNoticesServices.getAllNotices();
        return ResponseEntity.ok(noticelist);
    }

    //url: http://localhost:8082/api/notices/addnotice

//"id":"12322"
//"title":"New Chirstmas event"
//"description":""
//"audience":""

    @PostMapping("/addnotice")
    public ResponseEntity<publicNoticesDTO> addNotice(@RequestBody publicNoticesDTO noticedto){
        System.out.println(noticedto.getDatecreated());
        publicNoticesDTO newNotice = publicNoticesServices.addNotice(noticedto);
        System.out.println(newNotice.getTitle());
        return new ResponseEntity<>(newNotice, HttpStatus.CREATED);
    }

    //url: http://localhost:8082/api/notices/findnotice/1
    @GetMapping("/findnotice/{id}")
    public ResponseEntity<publicNoticesDTO> findNoticeByID(@PathVariable Long id){
        publicNoticesDTO notice = publicNoticesServices.findNoticeByID(id);
        return ResponseEntity.ok(notice);
    }


    //url: http://localhost:8082/api/notices/updatenotice/1
    @PutMapping("/updatenotice/{id}")
    public ResponseEntity<publicNoticesDTO> updateNoticeByID(@RequestBody publicNoticesDTO updateinfo, @PathVariable Long id){
        publicNoticesDTO updatednotice = publicNoticesServices.updateNoticeByID(updateinfo, id);
        return new ResponseEntity<>(updatednotice, HttpStatus.OK);
    }


    //url : http://localhost:8082/api/notices/deletenotice/1
    @DeleteMapping("/deletenotice/{id}")
    public ResponseEntity<String> deleteNoticeById(@PathVariable Long id){
        String delete = publicNoticesServices.deleteNoticeById(id);
        return ResponseEntity.ok(delete);
    }

    //url : http://localhost:8082/api/notices/deleteallnotices
    @DeleteMapping("/deleteallnotices")
    public ResponseEntity<String> deleteAllNotices(){
        String deleteall = publicNoticesServices.deleteAllNotices();
        return ResponseEntity.ok(deleteall);
    }

    //url: http://localhost:8082/api/notices/all
    @GetMapping("/{audience}")
    public ResponseEntity<List<publicNoticesDTO>> getNoticeByAudience(@PathVariable String audience){
        List<publicNoticesDTO> notices = publicNoticesServices.getNoticeByAudience(audience);
        return ResponseEntity.ok(notices);
    }
}
