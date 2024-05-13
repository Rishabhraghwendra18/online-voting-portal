package com.rishabhraghwendra.server.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "party_votes")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Party {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "party_name")
    private String partyName;
    @Column(name = "votes")
    private int votes;
}
