export default {
    setActive (states, { active }) {
        states.active = active
        localStorage.setItem('active', active)
    }
}