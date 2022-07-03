// 8 kyu
// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  const suit = card.slice(-1)
  switch (suit) {
    case '♣':
      return 'clubs'
    case '♦':
      return 'diamonds'
    case '♥':
      return 'hearts'
    default:
      return 'spades'
  }
}

// Simplier Solution

function defineSuit(card) {
  return {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  }[card.slice(-1)]
}