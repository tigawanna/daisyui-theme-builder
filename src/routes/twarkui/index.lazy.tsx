import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/twarkui/')({
  component: () => <div>Hello /twarkui/!</div>
})