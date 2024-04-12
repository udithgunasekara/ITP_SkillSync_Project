package BackEnd.service.imple;

import BackEnd.DTO.ConversationDTO;
import BackEnd.Mapper.ConversationMapper;
import BackEnd.entity.Conversation;
import BackEnd.repository.ConversationRepository;
import BackEnd.service.ConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConversationServiceImp implements ConversationService {
    private final ConversationRepository conversationRepository;

    @Autowired
    public ConversationServiceImp(ConversationRepository conversationRepository) {
        this.conversationRepository = conversationRepository;
    }

    @Override
    public List<Conversation> getAllConversations() {
        return conversationRepository.findAll();
    }

    @Override
    public ConversationDTO getConversationByUser1AndUser2(String user1, String user2) {
        Conversation conversation = conversationRepository.findByUser1AndUser2(user1, user2).orElseThrow(() -> new RuntimeException("users are not found"));
        return ConversationMapper.mapToConversationDTO(conversation);
    }

    @Override
    public ConversationDTO saveConversation(Conversation conversation) {
        Conversation conversation1=conversationRepository.save(conversation);
        return ConversationMapper.mapToConversationDTO(conversation1);
    }

}