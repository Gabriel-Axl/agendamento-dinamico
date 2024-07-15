package com.alex.agendamento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/cron/")
public class CronController {

    @Autowired
    private CronService cronService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<String> getCronograma() {
        return ResponseEntity.status(HttpStatus.OK).body(cronService.getCronograma());
    }

    @CrossOrigin(origins = "*")
    @PutMapping
    public ResponseEntity<Object> updateCronograma(@RequestBody CronDTO cronDTO) {
        cronService.setCronograma(cronDTO.getCronograma());
        System.out.println(cronDTO.getCronograma());
        return ResponseEntity.status(HttpStatus.CREATED).body(Collections.singletonMap("mensagem", "Agendamento alterado com sucesso"));
    }
}