DROP SCHEMA IF EXISTS yurischeme;

CREATE SCHEMA yurischeme;

CREATE TABLE yurischeme.parked_car (
    id serial primary key,
    plate text not null,
    checkin_date timestamp default now(),
    checkout timestamp null
);