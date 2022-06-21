import { interpolatePath } from 'cirque';

import React from 'react'

function Planets() {
  let render;

  return (
    <div>
      {/* Planets */}
      <div class="animation">
        <div class="planet-large planet">
            <div class="rotation-medium">
            <div class="planet-medium planet"></div>
            </div>
            <div class="rotation-small">
            <div class="planet-small planet"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Planets