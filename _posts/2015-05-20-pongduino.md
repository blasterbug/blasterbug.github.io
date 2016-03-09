---
title: "Pongduino"
date: 15/05/20 16:11:27
published : false
categories:
 - irccyn
 - arduino
---
Pendant mes stages au sein de l'[Institut de Recherche en Communication et Cybernétique de Nantes][irccyn], j'ai participé au développement du démonstrateur du projet [ANR ImpRo] que j'ai rebatisé Pongduino.


Le démonstrateur est composé de deux mobiles qui s'échangent une balle. Les mobiles sont des robots Lego équipés d'une brique [Lego Mindstorms NXT] tournant sous [Trampoline]. Trampoline est le système d'exploitation temps réel développé par l'équipe STR de l'IRCCyN. Il permet de superviser la commande du robot.

~~~Arduino
// import libraries
#include <I2C.h>
#include <DistNx.h>

DistNx sensor;
int distance;

void setup()
{
  // start serial communication
  Serial.begin( 9600 );
  // join I2C bus
  I2c.begin();
}

void loop()
{
  // get long distance
  distance = sensor.longDistance();
  // display distance
  Serial.print( F("long distance = ") );
  Serial.print( distance );
  Serial.println( F(" mm") );
  // wait 1 second
	delay( 1000 );
}
~~~

Une caméra CMUcam4 reliée à une carte Arduino Uno, permet de détecter la position de la balle sur le terrain. La carte Arduino est également reliée à une rampe de capteurs située sous le robot. Ces informations sont transmissent au NXT via une connexion I2C ce qui lui permet de connaître la position de la balle.

Le robot possède deux moteurs. Le premier lui permet de se déplacer (sur une axe) pour se mettre face à la balle. Le second moteur actionne la raquette du robot avec laquelle il tape dans la balle pour la renvoyer.

[ANR ImpRo]: http://anr-impro.irccyn.ec-nantes.fr/#description
[Lego Mindstorms NXT]: https://fr.wikipedia.org/wiki/Lego_Mindstorms_NXT
[Trampoline]: http://trampoline.rts-software.org
[irccyn]: http://www.irccyn.ec-nantes.fr/fr/l-irccyn/presentation
