CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS INT AS $$
BEGIN
  -- Check if N is less than 1 and return NULL if true
  IF N < 1 THEN
    RETURN NULL;
  END IF;

  -- Return the Nth highest salary if N is valid
  RETURN (
    SELECT COALESCE(
      (SELECT DISTINCT salary
       FROM Employee
       ORDER BY salary DESC
       LIMIT 1 OFFSET N-1),
      NULL)
  );
END;
$$ LANGUAGE plpgsql;
