-- 1 
DELIMITER $$

CREATE TRIGGER AtualizaAno
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
    SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER MoviesLogs
BEFORE INSERT ON movies_logs
FOR EACH ROW
BEGIN
    SET INSERT INTO movies_logs(movie_id, executed_action, log_date)
     VALUES (NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER  ;

-- 2
DELIMITER $$

CREATE TRIGGER ComparaValorDoTicket
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN
    SET NEW.ticket_price_esttimation IF( NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing' )
    INSERT INTO ( movie_id , executed_action e log_date )
    VALUES ( NEW.movie_id, 'UPDATE', NOW() );
END $$

DELIMITER ;

-- 3
DELIMITER $$

CREATE TRIGGER AtualizaTabelaMoviesLogsAoDeletarFilme
BEFORE DELETE ON movies
FOR EACH ROW
BEGIN
    SET INSERT INTO movies_logs( delete_date , executed_action, movie_id)
    VALUES ( NOW(), 'DELETE', OLD.movie_id );
END $$

DELIMITER ;
