# Embassy

Embassy is an online/offline networked audio installation. It features two FM radios mounted on walls directly opposite to each other. Both radios are tuned to different frequencies and when in a non-active state, broadcast static. This static is sporadically interrupted by the broadcast of archival audio footage. Located in proximity to each radio are two raspberry pi computers - both of which are connected to the Internet and are hidden from view. Using the Twitter API, each computer is monitoring the Twitter accounts of 160 American embassies and 101 Russian embassies respectively. Whenever one of these monitored accounts tweet, a series of archival audio pieces are randomly selected and broadcast from the raspberry pi to the respective radio. 

All of the archival audio originates from, or is in reference to, the Cold War era. This audio draws not just from well known events from this time period such as the emergency calls made following the Chernobyl nuclear disaster or speeches from individuals such as Henry Kissinger, but also features more obscure moments –  the laughter of a woman as she passes from East to West Berlin for the first time, or extracts of a US television show featuring a survivor of Hiroshima and the co-pilot of the plane that dropped the bomb. In doing so, the project engages in a form of media archaeology that recalls the forgotten, personalised stories of those who lived through this period - offering brief, temporal insights into a time passed. Once an iteration of audio has played out on the respective radio, the ‘transmission’ ceases, the signal stops, and the radio returns to its non-active state, awaiting further external events -  outeractions - to occur. 



002 morseCode.pdf
Preliminary code used to convert tweets into morse code.

003 americanEmbassyRasPI.pdf
Javascript code to be run on a Raspberry pi, used to monitor US embassies and play audio files when specific embassy tweets.

004 russianEmbassyRasPI.pdf
Javascript code to be run on a raspberry pi, used to monitor Russian embassies and play audio files when specific embassy tweets.

005 americanEmbassyList.pdf
List of US embassies with Twitter accounts and their numerical twitter IDs.

006 russianEmbassyList.pdf
List of Russian embassies with Twitter accounts and their numerical twitter IDs.
