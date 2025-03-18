<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $query = Task::where('creator_id', $request->user()->id);

        // Apply filters only if search parameters are provided
        if ($request->filled('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('start_date') && $request->filled('end_date')) {
            $query->whereBetween('due_date', [$request->start_date, $request->end_date]);
        }

        // Get the page size from the request, defaulting to 20
        $perPage = $request->input('per_page', 20);

        // Paginate results
        $tasks = $query->paginate($perPage);

        return response()->json($tasks);
    }


    public function show(Request $request, $id)
    {
        $task = Task::find($id);

        // Check if task exists and belongs to the requesting user
        if (!$task || $task->creator_id !== $request->user()->id) {
            return response()->json(['message' => 'Task not found'], 404);
        }

        return response()->json($task);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'status'      => 'required|in:To Do,In Progress,Done',
            'due_date'    => 'required|date',
        ]);

        // Automatically attach the authenticated user's ID as the creator
        $validated['creator_id'] = $request->user()->id;

        $task = Task::create($validated);

        return response()->json($task, 201);
    }

    public function update(Request $request, $id)
    {
        $task = Task::find($id);

        if (!$task || $task->creator_id !== $request->user()->id) {
            return response()->json(['message' => 'Task not found'], 404);
        }

        $validated = $request->validate([
            'name'        => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'status'      => 'sometimes|in:To Do,In Progress,Done',
            'due_date'    => 'sometimes|date',
        ]);

        $task->update($validated);

        return response()->json($task);
    }

    public function destroy(Request $request, $id)
    {
        $task = Task::find($id);

        if (!$task || $task->creator_id !== $request->user()->id) {
            return response()->json(['message' => 'Task not found'], 404);
        }

        $task->delete();

        return response()->json(['message' => 'Task deleted successfully']);
    }
}
