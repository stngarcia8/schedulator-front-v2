export const API_URL = 'http://localhost:8081'
export const URI_DURATION = '/schedulator/api/v1.0/tasks'
export const URI_QUANTITY = '/schedulator/api/v1.0/tasks/day'

export const SearchType = {
  BY_TASK_DURATION: 'byTaskDuration',
  BY_TASK_PER_DAY: 'byTaskPerDay'
}

export const MESSAGE_TYPES = {
  NO_TASK: {
    title: 'No hay tareas disponibles',
    text: 'En estos momentos no hay tareas para visualizar, presione el botón <strong>Cargar tareas</strong>, para verificar la disponibilidad de estas.',
    imageName: 'NoTask.png'
  },
  ERROR_400: {
    title: 'Un error ha ocurrido',
    text: 'No ha sido posible cargar tareas, el servidor no encuentra información para desplegar la solicitud realizada.  Disculpe las molestias.',
    imageName: 'error404.png'
  },
  ERROR_500: {
    title: 'Un error ha ocurrido',
    text: 'El servidor de tareas no se encuentra disponible, pruebe a intentar cargar información en un momento. En caso de persistir el problema, favor avisar al administrador del sistema, disculpe las molestias.',
    imageName: 'error500.png'
  }
}
