    const sqlFlashCards = [
        { question: "Q1 difference between HAVING and WHERE", answer: "WHERE happens before GROUPING (filtering rows and HAVING after (filtering groups)"},
        { question: "Q2 primary key vs foreign key", answer: "PK: unique identifier for a row. FK: frick it, references a PK in another table"},
        { question: "Q3 DELETE vs TRUNCATE vs DROP", answer: "Delete: removes row (can rollback), Truncate: removes all rows (no rollback), Drop: removes table structure"},
        { question: "Q4 Left: 1,2,3,4,5 and Right: 2,3,4 and you perform a left join. what happens", answer: "returns all rows from left table with NULLs for non-matching rows on the right (aka NULL for columns 1 and 5)"},
        { question: "Q5 you change column name from a table, what happens to the rows", answer: "today I don't wanna do anything ~ nothing at all ~"},
        { question: "Q6 what does changing the column datatype do to the rows", answer: "possible data loss: float to int will remove the decimals or string to int will make it become NULL. Or change in behaviour or overflow"},
        { question: "Q7 is this correct? WHERE Salary = NULL", answer: "no, Salary IS NULL"},
        { question: "Q8 INNER vs LEFT or RIGHT JOIN", answer: "INNER: returns matching rows only. LEFT/RIGHT: returns LEFTorRIGHT rows + matching rows"},
        { question: "Q9 COUNT(*) vs COUNT(column)", answer: "COUNT(column) ignore NULLS"},
        { question: "Q10 does AVG() count NULLs", answer: "NOPE"}
        // ...more questions and answers here
    ];
