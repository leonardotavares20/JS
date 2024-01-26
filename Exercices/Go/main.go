package main

import "fmt"


func main()  {
	//String interpretada em go
	 test := "oi tudo bem\ncomo voce vai?\tQual seu filme favorito?\tEu estou \"bem\""
	 //Raw string literals em go, ou seja nada é interpretado tudo é lireal
	 testTwo := `"oi tudo bem\ncomo voce vai?\tQual seu filme favorito?\tEu estou \"bem\""`;
	 fmt.Println(test)
	 fmt.Println(testTwo)

	  stringOne := "Eai";
	  stringTwo := "Tudo bem";

	  function := fmt.Sprint(stringOne, " " , stringTwo)

	  fmt.Println(function)

	  fmt.Printf("%v, %T", stringOne, stringOne)
} 



