package com.rishabhraghwendra.server.repository;

import com.rishabhraghwendra.server.entity.Voter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoterRepository extends JpaRepository<Voter,String> {
}
