﻿' Change an existing flight according to the passed in 3 parameters 

a=Parameter("Tickets")
b=Parameter("ClassOfService")
c=Parameter("PassengerName")

WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTicketsCombo").Select a @@ hightlight id_;_1904552888_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("flightClassCombo").Select b @@ hightlight id_;_1955290176_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set c @@ hightlight id_;_1955294928_;_script infofile_;_ZIP::ssf10.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfButton("updateBtn").Click @@ hightlight id_;_1955282448_;_script infofile_;_ZIP::ssf15.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 92 updated").Output CheckPoint("Order 92 updated") @@ hightlight id_;_1939452064_;_script infofile_;_ZIP::ssf19.xml_;_
