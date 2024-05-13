package com.rishabhraghwendra.server.repository;

import com.rishabhraghwendra.server.entity.Party;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PartyRepository extends JpaRepository<Party,Integer> {
//    List<Party> getAllPartyVotes();
}
