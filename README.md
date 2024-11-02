# Project Overview
For this midterm project, I chose to create an interactive simulation of the Golden Snitch from the Harry Potter series. The Golden Snitch is a small, winged ball used in the wizarding sport of Quidditch, known for its quick and unpredictable movements.

# The project is both interactive and time-based.
Interactive: Users interact with the Golden Snitch by clicking on it. When clicked, the Snitch reacts by "flying" to a new location.
Time-based: The movement from one position to another is animated, rather than instant, creating a smooth transition that mimics the Snitch’s flight.

# Some key ideas I want to explore and experiment with in this project:
Smooth flight animation: The Snitch will fly in a smooth path when it moves to a new location, creating a realistic flight feel.
Randomized position: Each time the Snitch is clicked, it will move to a random new position on the screen, adding unpredictability and challenge for the user.
Visual effects: I plan to give the Golden Snitch a visually appealing design with wings and shiny, metallic textures to replicate its appearance from the movies.

# Are there aspects of your project that are related to any of the readings we've done?
yes!I seem to remember it was the second week's reading assignment on computer vision and art? >_<

# sketch
The posters and sketches are in the list on the left, I don't know how to insert them into the README...

# 20241026
I created the background image of the wizarding world in photoshop, As well as the snitch design! I exported the wings separately from the body for the png, for post effects (since the body is immobile and the wings are constantly shaking)and I used the wingDirection variable to control the direction of movement of the wings, reversing the direction when the wingOffset exceeds a certain range, to achieve the visual effect of moving up and down (like shaking).
Next week I will implement the click-move interaction.

# 20241102
Finally done! And had a fun test with my classmates!
Building on last week's, I've added effects such as blood bars/timers/and click-to-interact/move-on-click.
I looked up information online and used a ( lerp ) effect rather than teleporting, creating a flight-move effect.

Click Interaction: Using mousePressed(), a click within a certain radius around the Snitch’s current position registers as a capture. Upon capture, the health bar resets, and the Snitch moves to a new random position.

The blood bar decreases with time, this is fast (0.9) and I wanted to increase the difficulty of the game ， blood bar reset after each click.
The health bar decreases over time, simulating a countdown. If it reaches zero, the noLoop() function stops the animation, and a "Game Over" message is displayed.
When the time runs out (when the blood bar is 0), a GAMEOVER pops up with a reset game reminder.


