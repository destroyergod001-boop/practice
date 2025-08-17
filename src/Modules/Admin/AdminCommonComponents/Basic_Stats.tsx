


interface StatsTabProps {
    data: Class;
    onChange: (cls: Class) => void;
    stats: Stat[];
  }
  
  export const StatsTab: React.FC<StatsTabProps> = ({ data, onChange, stats }) => {
    const basicStats = JSON.parse(data.basic_stats || '{}');
    const handleBasicChange = (key: string, value: number) => {
        const updated = { ...basicStats, [key]: value };
        onChange({ ...data, basic_stats: JSON.stringify(updated) });
      };

    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">Basic Stats</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map(stat => (
            <div key={stat.id} className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-gray-700 dark:text-gray-300 w-32 truncate"
                title={stat.name}
              >
                {stat.name}
              </label>
              <input
                type="number"
                value={basicStats[stat.short_name] ?? 1}
                onChange={e => handleBasicChange(stat.short_name, Number(e.target.value))}
                className="w-24 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-right"
              />
            </div>
          ))}
        </div>
      </div>
    );
}