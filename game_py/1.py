# Program 19: Poker Dice Game : Single Round

import random

print('╔═══════════════════════════════════╗')
print('║\tPOKER DICE GAME - ROUND 1   ║')
print('╚═══════════════════════════════════╝')

print('\nRolling 5 dice...\n')

# rolling the dice and storing value in dice
dice = []
score = {500:'Five of a Kind', 400:'Four of a Kind', 300:'Full House', 200:'Straight ', 150:'Three of a Kind', 100:'Two Pair', 50:'One Pair'}

for i in range(5):
    value = random.randint(1,6)
    dice.append(value)

print('Position :  0  1  2  3  4')
print('Dice :     ', dice[0],'',  dice[1],'',  dice[2],'',  dice[3],'',  dice[4])

# comparing values

print('Current Hand : ')