# Tasks CRUD — Sample React App Walkthrough

A complete **Create, Read, Update, Delete** (CRUD) feature built with React + TypeScript + Inertia.js inside your Laravel project.

## What Was Built

### Backend (Laravel)

| File | Purpose |
|------|---------|
| [2026_07_12_000000_create_tasks_table.php](file:///c:/Users/ian/learning_react/database/migrations/2026_07_12_000000_create_tasks_table.php) | Database migration — creates the `tasks` table |
| [Task.php](file:///c:/Users/ian/learning_react/app/Models/Task.php) | Eloquent Model — defines fillable fields + belongs to User |
| [User.php](file:///c:/Users/ian/learning_react/app/Models/User.php) | Updated — added `tasks()` hasMany relationship |
| [TaskController.php](file:///c:/Users/ian/learning_react/app/Http/Controllers/TaskController.php) | Controller with `index`, `store`, `update`, `destroy` methods |
| [web.php](file:///c:/Users/ian/learning_react/routes/web.php) | Updated — added task CRUD routes under auth middleware |

---

### Frontend (React + TypeScript)

| File | Purpose |
|------|---------|
| [tasks/index.tsx](file:///c:/Users/ian/learning_react/resources/js/pages/tasks/index.tsx) | Main Tasks page with full CRUD UI |
| [app-sidebar.tsx](file:///c:/Users/ian/learning_react/resources/js/components/app-sidebar.tsx) | Updated — added "Tasks" link in the sidebar |

---

## React Concepts Demonstrated

The [tasks/index.tsx](file:///c:/Users/ian/learning_react/resources/js/pages/tasks/index.tsx) file is heavily commented and demonstrates these key React concepts:

### 1. **Components & Component Composition**
- `TasksIndex` (main page), `TaskForm`, `TaskCard`, `DeleteTaskDialog`, `StatsCards`, `EmptyState`
- Shows how to break a UI into small, reusable pieces

### 2. **Props & TypeScript Interfaces**
```tsx
interface Task {
    id: number;
    title: string;
    status: 'pending' | 'in_progress' | 'completed';
    // ...
}
```

### 3. **State Management with `useState`**
```tsx
const [createDialogOpen, setCreateDialogOpen] = useState(false);
const [editingTask, setEditingTask] = useState<Task | null>(null);
```

### 4. **Form Handling with Inertia's `useForm`**
```tsx
const { data, setData, post, put, errors, processing } = useForm({
    title: task?.title ?? '',
    // ...
});
```

### 5. **Conditional Rendering**
```tsx
{tasks.length === 0 ? <EmptyState /> : <TaskList />}
```

### 6. **List Rendering with `.map()`**
```tsx
{tasks.map((task) => (
    <TaskCard key={task.id} task={task} />
))}
```

### 7. **Event Handling**
```tsx
<Button onClick={() => onEdit(task)}>Edit</Button>
```

### 8. **Config Objects Pattern**
```tsx
const statusConfig = {
    pending: { label: 'Pending', icon: Clock, className: '...' },
    // ...
};
```

---

## How to Run

1. Make sure the migration has been run (already done ✅):
   ```bash
   php artisan migrate
   ```

2. Start the dev servers:
   ```bash
   php artisan serve
   npm run dev
   ```

3. Log in and navigate to **Tasks** in the sidebar

---

## Verified

- ✅ Migration ran successfully
- ✅ TypeScript compiles cleanly (no new errors introduced)
- ✅ All existing shadcn/ui components reused (Card, Button, Dialog, Badge, Input, Label)
- ✅ Follows project conventions (layouts, breadcrumbs, Inertia patterns)
