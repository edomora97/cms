begin;

alter table tasks add languages character varying null default null;

rollback; -- change this to: commit;
