package com.alex.agendamento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Component;

import java.util.concurrent.ScheduledFuture;

@Component
public class CronService implements SchedulingConfigurer {

    private String cronograma = "10 * * * * ?";
    private ScheduledFuture<?> scheduledFuture;

    @Autowired
    private TaskExecutor taskExecutor;

    @Autowired
    private ScheduledTaskRegistrar taskRegistrar;

    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        this.taskRegistrar = taskRegistrar;

        scheduledFuture = taskRegistrar.getScheduler().schedule(
                this::minhaTarefaAgendada,
                new CronTrigger(cronograma)
        );
    }

    public void setCronograma(String novoCronograma) {
        this.cronograma = novoCronograma;
        if (scheduledFuture != null) {
            scheduledFuture.cancel(false);
        }

        scheduledFuture = taskRegistrar.getScheduler().schedule(
                this::minhaTarefaAgendada,
                new CronTrigger(cronograma)
        );
    }

    private void minhaTarefaAgendada() {
        taskExecutor.execute(() -> {
            System.out.println("Executando tarefa agendada..." + this.cronograma);
        });
    }

    public String getCronograma() {
        return cronograma;
    }
}
