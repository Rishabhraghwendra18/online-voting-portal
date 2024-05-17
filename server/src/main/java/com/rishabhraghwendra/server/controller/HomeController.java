package com.rishabhraghwendra.server.controller;

import com.rishabhraghwendra.server.entity.Party;
import com.rishabhraghwendra.server.entity.Voter;
import com.rishabhraghwendra.server.requestResponse.CommonResponse;
import com.rishabhraghwendra.server.requestResponse.PartyVoteRequest;
import com.rishabhraghwendra.server.requestResponse.VoterRequest;
import com.rishabhraghwendra.server.requestResponse.VoterResponse;
import com.rishabhraghwendra.server.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {
    private HomeService homeService;
    @Autowired
    public HomeController(HomeService homeService){
        this.homeService=homeService;
    }
//    @GetMapping("/votes")
//    public String getVotes(){
//        return homeService.getAllPartyVotes();
//    }
@GetMapping("/votes")
public List<Party> getVotes(){
    return homeService.getAllPartyVotes();
}
    @PostMapping("/votes")
    public ResponseEntity<CommonResponse> setVotes(@RequestBody PartyVoteRequest partyVoteRequest){
        Party party=homeService.increasePartyVote(partyVoteRequest.getId());
        if (party != null){
            return new ResponseEntity<>(new CommonResponse("Voted Successfully",false, HttpStatus.OK.value()),HttpStatus.OK);
        }
        return new ResponseEntity<>(new CommonResponse("Can't Vote",true, HttpStatus.INTERNAL_SERVER_ERROR.value()),HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @PostMapping("/voter")
    public ResponseEntity<VoterResponse> getVoter(@RequestBody VoterRequest voterRequest){
        Voter vote = homeService.getVoter(voterRequest.getVoterId());
        if (vote != null){
            return new ResponseEntity<>(new VoterResponse(true),HttpStatus.OK);
        }
        return new ResponseEntity<>(new VoterResponse(false),HttpStatus.OK);
    }
    @PostMapping("/addvoter")
    public ResponseEntity<VoterResponse> setVoter(@RequestBody VoterRequest voterRequest){
        Voter vote = homeService.addVoter(voterRequest.getVoterId());
        if (vote == null){
            return new ResponseEntity<>(new VoterResponse(false),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(new VoterResponse(true),HttpStatus.OK);
    }
}
