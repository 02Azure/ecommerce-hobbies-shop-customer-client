import Swal from 'sweetalert2'

const alert = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 3000,
  showConfirmButton: false,
  showCloseButton: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default alert
