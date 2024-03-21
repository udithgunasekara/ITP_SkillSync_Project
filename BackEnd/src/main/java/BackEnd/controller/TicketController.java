package BackEnd.controller;

import BackEnd.DTO.TicketDto;
import BackEnd.service.TicketServices;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/api/ticket")
public class TicketController {
    public TicketServices ticketServices;

    //url : http://localhost:8082/api/ticket/alltickets/12323
    @GetMapping("/alltickets/{userid}")
    public ResponseEntity<List<TicketDto>> getAllTickets(@PathVariable Long userid){
        List<TicketDto> ticketlist = ticketServices.getAllTickets(userid);
        return ResponseEntity.ok(ticketlist);
    }

    //url: http://localhost:8082/api/ticket/addticket
    @PostMapping("/addticket")
    public ResponseEntity<TicketDto> raiseTicket(@RequestBody TicketDto ticketdto){
        TicketDto newTicket = ticketServices.raiseTicket(ticketdto);
        return new ResponseEntity<>(newTicket, HttpStatus.CREATED);
    }

    //url: http://localhost:8082/api/ticket/findticket/1
    @GetMapping("/findticket/{id}")
    public ResponseEntity<TicketDto> findTicketByID(@PathVariable Long id,Long userid ){
        TicketDto ticket = ticketServices.getTicketByTicketID(id, userid);
        return ResponseEntity.ok(ticket);
    }

    @PutMapping("/updateticket/{id}")
    public ResponseEntity<TicketDto> updateTicketByID(@RequestBody TicketDto updateinfo, @PathVariable Long id, Long usrid){
        TicketDto updatedticket = ticketServices.updateTicketByID(updateinfo, id, usrid);
        return new ResponseEntity<>(updatedticket, HttpStatus.OK);
    }

    @DeleteMapping("/deleteticket/{id}")
    public ResponseEntity<String> deleteTicketById(@PathVariable Long id, Long userid){
        String delete = ticketServices.deleteTicketById(id, userid);
        return ResponseEntity.ok(delete);
    }
}
