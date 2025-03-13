"use client"

import { useEffect, useRef } from "react"

export default function CircuitAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Circuit node class
    class Node {
      x: number
      y: number
      radius: number
      color: string
      connections: Node[]
      pulseRadius: number
      pulseOpacity: number
      isPulsing: boolean
      pulseSpeed: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = 2 + Math.random() * 2
        this.color = "#3b82f6"
        this.connections = []
        this.pulseRadius = 0
        this.pulseOpacity = 0
        this.isPulsing = false
        this.pulseSpeed = 0.5 + Math.random() * 0.5
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Draw pulse if active
        if (this.isPulsing) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(59, 130, 246, ${this.pulseOpacity})`
          ctx.lineWidth = 1
          ctx.stroke()

          this.pulseRadius += this.pulseSpeed
          this.pulseOpacity = Math.max(0, 1 - this.pulseRadius / 50)

          if (this.pulseOpacity <= 0) {
            this.isPulsing = false
            this.pulseRadius = 0
          }
        }

        // Draw connections
        this.connections.forEach((node) => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.strokeStyle = "#3b82f6"
          ctx.lineWidth = 0.5
          ctx.stroke()
        })
      }

      startPulse() {
        this.isPulsing = true
        this.pulseRadius = this.radius
        this.pulseOpacity = 1
      }
    }

    // Create circuit tree
    const createCircuitTree = () => {
      const nodes: Node[] = []
      const nodeCount = 50

      // Create root node
      const rootNode = new Node(canvas.width / 2, canvas.height / 2)
      nodes.push(rootNode)

      // Create branch nodes
      for (let i = 0; i < nodeCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = 30 + Math.random() * 200
        const x = canvas.width / 2 + Math.cos(angle) * distance
        const y = canvas.height / 2 + Math.sin(angle) * distance

        const node = new Node(x, y)
        nodes.push(node)
      }

      // Connect nodes
      nodes.forEach((node, i) => {
        if (i > 0) {
          // Connect to at least one other node
          const connectTo = nodes[Math.floor(Math.random() * i)]
          node.connections.push(connectTo)
          connectTo.connections.push(node)

          // 30% chance to connect to another node
          if (Math.random() < 0.3 && i > 1) {
            let anotherNode
            do {
              anotherNode = nodes[Math.floor(Math.random() * i)]
            } while (anotherNode === connectTo)

            node.connections.push(anotherNode)
            anotherNode.connections.push(node)
          }
        }
      })

      return nodes
    }

    const nodes = createCircuitTree()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw all nodes
      nodes.forEach((node) => {
        node.draw(ctx)
      })

      // Randomly pulse nodes
      if (Math.random() < 0.03) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        randomNode.startPulse()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full circuit-animation" />
}

