<!-- 1 -->
BEGIN
  INPUT Math, Physics, Chemistry
    Average = (Math + Physics + Chemistry) / 3
    DISPLAY Average
END

<!-- 2 -->
BEGIN
  INPUT Money dollar
    Money = dollar * 23000
    DISPLAY Money
END

<!-- 3 -->
BEGIN
  INPUT 3 value a,b,c 3, 5, 4
  IF a > b AND a > c
  DISPLAY a MAX
    IF a > b AND a < c
    DISPLAY c MAX
  ELSE b > a AND b > c
  DISPLAY b MAX
END