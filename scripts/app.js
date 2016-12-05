/**
 * Frogger
 *
 * @author Alex Ordonez <me@ordonezalex.com>
 * @author Malak Patel <patelmalak@gmail.com>
 */

document.addEventListener("DOMContentLoaded", function () {
  const GAME_WIDTH = 11;
  const GAME_HEIGHT = 12;

  // Get game entities
  var player = u('#player');

  // Add move listener to player
  player.on('move', function () {
    var x = Number(player.data('x'));
    var y = Number(player.data('y'));

    var left = x * 50;
    var top = y * 50;

    this.style.left = left + "px";
    this.style.top = top + "px";
  });

  // Define key presses
  u('body').on('keyup', function (e) {
    var x, y;
    var key = e.key.toLowerCase();

    function moveUp (player) {
      var y = Number(player.data('y'));

      if (0 === y || GAME_HEIGHT === y) {
        return;
      }

      player.data('y', y - 1).trigger('move');
    }

    function moveUp (player) {
      var y = Number(player.data('y'));

      if (0 === x || GAME_WIDTH === x) {
        return;
      }

      player.data('y', y - 1).trigger('move');
    }

    switch (key) {
      case 'w':
        moveUp(player);
        break;
      case 'a':
        player.data('x', Number(player.data('x')) - 1).trigger('move');
        break;
      case 's':
        player.data('y', Number(player.data('y')) + 1).trigger('move');
        break;
      case 'd':
        player.data('x', Number(player.data('x')) + 1).trigger('move');
        break;
      default:
        console.log('Unrecognized key press');
    }
  });

  // Give player initial location
  player.data('x', Math.round(Math.random() * GAME_WIDTH));
  player.data('y', GAME_HEIGHT);
  player.trigger('move');

  console.log('Player is at ' + player.data('x') + ', ' + player.data('y'));
});

