package BackEnd.controller;

import BackEnd.DTO.publicNoticesDTO;
import BackEnd.service.publicNoticeServices;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@AllArgsConstructor
public class publicNoticesController {
    public publicNoticeServices publicNoticesServices;

    @GetMapping("/publicNotices")
    public String getAllNotices(Model model){
        List<publicNoticesDTO> notices = publicNoticesServices.getAllNotices();

        model.addAttribute("notices",notices);

        return "publicNotices";
    }
}
