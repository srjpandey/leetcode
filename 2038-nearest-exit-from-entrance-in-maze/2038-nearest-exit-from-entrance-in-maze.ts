function nearestExit(maze: string[][], entrance: number[]): number {
	const free = ".";
	const visited = "x";
	const h = maze.length;
	const w = maze[0].length;

	const queue = [{ coords: entrance, level: 0 }];
    maze[entrance[0]][entrance[1]] = visited;

	const checkCoords = (y: number, x: number, level: number) => {
		if (x < 0 || x >= w || y < 0 || y >= h) {
			// Out of bounds.
			return false;
		}
		if (maze[y][x] === free) {
			// Valid path.
		    maze[y][x] = visited;
			if (x === 0 || x === w - 1 || y === 0 || y === h - 1) {
				// Edge detection.
				return true;
			}
			// Check neighbours.
			queue.unshift({ coords: [y, x], level: ++level });
		}
		return false;
	};

	while (queue.length) {
		const {
			coords: [y, x],
			level,
		} = queue.pop()!;
		if (
			checkCoords(y - 1, x, level) ||
			checkCoords(y + 1, x, level) ||
			checkCoords(y, x - 1, level) ||
			checkCoords(y, x + 1, level)
		) {
			return level + 1;
		}
	}

	return -1;
}