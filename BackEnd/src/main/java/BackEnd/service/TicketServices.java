package BackEnd.service;

import BackEnd.DTO.TicketDto;

import java.util.List;

public interface TicketServices {

    List<TicketDto> getAllTickets(Long userid);

    TicketDto raiseTicket(TicketDto ticketDto);

    TicketDto getTicketByTicketID(Long id, Long userid);

    TicketDto updateTicketByID(TicketDto updateinfo, Long id, Long userid);

    String deleteTicketById(Long id, Long userid);


}
