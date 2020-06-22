# PRG08-Angry-Captain-completed

Toevoegen van het Observer Pattern om de kapitein wakker te maken en een bericht te plaatsen op het mesaggeboard.

![image of Notify the Captain](notify-the-captain.png)

## Game play

- Wanneer op de horn wordt geklikt, komt er een bericht van activatie op het messageboard te staan. 
- Wanneer op een piratenboot geklikt wordt, zal deze actief worden (verandert naar een gekleurd plaatje) en 'luistert' dan ook naar de horn. 
- Klik je nog een keer op een piratenboot, dan luistert deze niet meer en krijgt een grijze kleur. 
- Wanneer een piratenboot actief is en de horn gaat af, dan wordt de kapitein op dat schip wakker. 


## Opdracht
- Teken het klassendiagram en pas het *Observer Pattern* toe.
- Maak de code af volgens boven beschreven regels.

## Lucas' notes
- Observer pattern toegepast: er wordt een notificatie verstuurd naar de kapiteins van alle schepen die zich aangemeld hebben. Hierbij wordt
gebruik gemaakt van een observer- en een subjectinterface. De horn is het subject en de schepen zijn observers. Het aanmelden kun je zelf
doen door erop te klikken (een schip is by default niet aangemeld). De horn is tevens een singleton, omdat er maar één van mag zijn en die
wil ik graag direct kunnen aanspreken vanuit de PirateShip class om me voor de notificatie van de horn te kunnen aan- of afmelden.