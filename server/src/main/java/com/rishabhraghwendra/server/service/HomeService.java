package com.rishabhraghwendra.server.service;

import com.rishabhraghwendra.server.entity.Party;
import com.rishabhraghwendra.server.entity.Voter;
import com.rishabhraghwendra.server.repository.PartyRepository;
import com.rishabhraghwendra.server.repository.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HomeService {
    private PartyRepository partyRepository;
    private VoterRepository voterRepository;

    @Autowired
    public HomeService(PartyRepository partyRepository, VoterRepository voterRepository){
        this.partyRepository=partyRepository;
        this.voterRepository=voterRepository;
    }
    public List<Party> getAllPartyVotes(){
        return partyRepository.findAll();
    }
    public Party increasePartyVote(int partyId){
        Optional<Party> optionalParty = partyRepository.findById(partyId);
        Party party = optionalParty.get();
        party.setVotes(party.getVotes()+1);
        partyRepository.save(party);
        return party;
    }
    public Voter getVoter(String voterId){
        Optional<Voter> optionalVoter = voterRepository.findById(voterId);
        if (optionalVoter.isPresent()){
            return optionalVoter.get();
        }
        return null;
    }
    public Voter addVoter(String voterId){
        Voter voter = new Voter(voterId);
        voterRepository.save(voter);
        return voter;
    }
}
