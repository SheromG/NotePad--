import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useThemeStore = create(
    persist(
        (set) => (
                {
            darkMode: false,
            text:'',
            setText: (text) => set({text}),
            toggleTheme: () =>
                set((state) => ({
                darkMode: !state.darkMode
                }))
            }
        ),
        { name: 'data' }
    )
)

export default useThemeStore
