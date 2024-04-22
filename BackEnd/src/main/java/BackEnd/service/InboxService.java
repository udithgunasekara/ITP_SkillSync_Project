package BackEnd.service;

import BackEnd.DTO.InboxDTO;
import BackEnd.entity.Inbox;

import java.util.List;

public interface InboxService {
    public List<InboxDTO> getAllInboxMessagesByUser(String username);

    public InboxDTO saveInboxMessage(Inbox inbox);


    public InboxDTO saveInboxMessageByConversationId(Long conversationId, String username, Inbox newInbox);


    public InboxDTO changeIsRead(Long id);
}