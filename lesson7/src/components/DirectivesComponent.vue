<template>
  <div class="box">
    <span v-change-color class="custom-btn">
      Basic directive
    </span>
  </div>
  <div class="box">
    <span v-change-color="textColor" class="custom-btn">
      Basic directive with parameter
    </span>
  </div>
  <div class="box">
    <span v-listen-click class="custom-btn">
      Click Me
    </span>
  </div>
  <div class="box">
    <span class="custom-btn" v-tooltip="'This is a tooltip'">
      Hover over me
    </span>
  </div>
  <div class="box">
    <div v-draggable class="draggable-element">Drag me anywhere</div>
  </div>
</template>

<script>
export default {
  name: "DirectivesComponent",
  data() {
    return {
      textColor: 'blue',
    }
  },

  directives: {
    // Базова Директива:
    // Створіть базову власну директиву, яка змінює колір тексту елемента, на якому вона використовується.
    // Директива з Параметром:
    // Розробіть власну директиву, яка приймає параметр і виконує різні дії в залежності від його значення.
    changeColor: {
      mounted(el, binding) {
        el.style.color = binding.value || 'red';
      }
    },
    // Директива для Тултипа:
    // Створіть власну директиву для відображення тултипа при наведенні миші.
    tooltip: {
      mounted(el, binding) {
        el.className += " " + "tooltip";

        const tooltip = document.createElement('span');
        tooltip.className = 'tooltiptext';
        tooltip.textContent = binding.value;
        el.appendChild(tooltip);
      }
    },
    // Директива для Перетягування (Drag and Drop):
    // Розробіть директиву, яка дозволяє зробити елемент перетягуваним.
    draggable: {
      mounted(el) {
        el.style.position = 'absolute';
        el.style.cursor = 'grab';
        let startX, startY, initialMouseX, initialMouseY;

        function onMouseDown(event) {
          event.preventDefault();
          startX = el.offsetLeft;
          startY = el.offsetTop;
          initialMouseX = event.clientX;
          initialMouseY = event.clientY;
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
          el.style.cursor = 'grabbing';
        }

        function onMouseMove(event) {
          const dx = event.clientX - initialMouseX;
          const dy = event.clientY - initialMouseY;
          el.style.left = startX + dx + 'px';
          el.style.top = startY + dy + 'px';
        }

        function onMouseUp() {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
          el.style.cursor = 'grab';
        }

        el.addEventListener('mousedown', onMouseDown);
      },
    }
  }
}
</script>

<style>
.custom-btn {
  border: 1px solid black;
  padding: 5px;
}

.box {
  text-align: center;
  margin-bottom: 1rem;
}

.tooltip {
  cursor: pointer;
}

.tooltiptext {
  display: none;
  opacity: 0;

  color: #ffffff;
  text-align: center;
  padding: 5px 0;
  border-radius: 2px;
  min-width: 120px;
  background: #575656;
}

.tooltip:hover .tooltiptext {
  position: absolute;
  display: inline-block;

  visibility: visible;
  opacity: 1;
}


.draggable-element {
  width: 100px;
  height: 100px;
  background-color: #13c56c;
}
</style>