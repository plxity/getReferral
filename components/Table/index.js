import { useState, useReducer, useMemo, useEffect } from 'react';
import { Pills } from './styles';
import {
  getCurrentCompany,
  getTotalExp,
  restrictedDropDown,
  findUniqueResponses,
} from './utils';
import DebouncedInput from './DebounceInput';
import {
  createTable,
  useTableInstance,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
} from '@tanstack/react-table';

import {
  TableHeading,
  TableRow,
  TableData,
  FilterContainer,
  SortIconContainer,
  NoRecord,
} from './styles';
import { rankItem, compareItems, rankings } from '@tanstack/match-sorter-utils';

const table = createTable()
  .setRowType()
  .setFilterMetaType()
  .setOptions({
    filterFns: {
      fuzzy: (row, columnId, value, addMeta) => {
        const itemRank = rankItem(row.getValue(columnId), value, {
          threshold: rankings.MATCHES,
        });
        addMeta(itemRank);
        return itemRank.passed;
      },
    },
    sortingFns: {
      fuzzy: (rowA, rowB, columnId) => {
        let dir = 0;
        if (rowA.columnFiltersMeta[columnId]) {
          dir = compareItems(
            rowA.columnFiltersMeta[columnId],
            rowB.columnFiltersMeta[columnId]
          );
        }
        return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
      },
    },
  });

function ResponseTable({ responses = {} }) {
  const [data, setData] = useState(
    () => findUniqueResponses(responses?.responses) || []
  );
  const rerender = useReducer(() => ({}), {})[1];
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = useMemo(
    () => [
      table.createGroup({
        header: 'Candidate Information',
        footer: (props) => props.column.id,
        columns: [
          table.createDataColumn(
            (row) => `${row.firstName} ${row.lastName || ''}`,
            {
              id: 'Full Name',
              header: 'Full Name',
              cell: (info) => info.getValue(),
              footer: (props) => props.column.id,
              enableSorting: false,
            }
          ),
          table.createDataColumn((row) => row.email, {
            id: 'email',
            cell: (info) => info.getValue(),
            header: () => <span>Email</span>,
            footer: (props) => props.column.id,
            enableSorting: false,
          }),
          table.createDataColumn((row) => getTotalExp(row.experience), {
            id: 'totalExp',
            cell: (info) => {
              return <span>{info.getValue()} Years</span>;
            },
            header: () => <span>Total experience</span>,
            footer: (props) => props.column.id,
          }),

          table.createDataColumn((row) => row.skills, {
            id: 'Skills',
            cell: (info) => {
              return info.getValue().map((skill) => {
                return <Pills>{skill}</Pills>;
              });
            },
            header: () => <span>Skills</span>,
            footer: (props) => props.column.id,
            filterFn: 'fuzzy',
            enableSorting: false,
          }),
          table.createDataColumn((row) => row.experience, {
            id: 'PreviousCompanies',
            cell: (info) => {
              if (!info.getValue()) {
                return <div>None</div>;
              }
              return info.getValue().map((exp) => {
                return <Pills>{exp.company}</Pills>;
              });
            },
            header: () => <span>Previous Companies</span>,
            footer: (props) => props.column.id,
            enableColumnFilter: false,
            enableSorting: false,
          }),
          table.createDataColumn((row) => row.peerlistUserName, {
            id: 'Peerlist Username',
            cell: (info) => {
              return (
                <a href={`https://peerlist.io/${info.getValue()}`}>Link</a>
              );
            },
            header: () => <span>Peerlist Profile</span>,
            footer: (props) => props.column.id,
            filterFn: 'fuzzy',
            enableSorting: false,
          }),
          table.createDataColumn((row) => getCurrentCompany(row.experience), {
            id: 'Current Company',
            cell: (info) => {
              if (!info.getValue()) {
                return <div>None</div>;
              }
              return <Pills>{info.getValue()}</Pills>;
            },
            header: () => <span>Current Company</span>,
            footer: (props) => props.column.id,
            filterFn: 'fuzzy',
            enableSorting: false,
          }),
          table.createDataColumn((row) => row.location.city, {
            id: 'City',
            cell: (info) => info.getValue(),
            header: () => <span>City</span>,
            footer: (props) => props.column.id,
            enableSorting: false,
          }),
        ],
      }),
    ],
    []
  );
  const instance = useTableInstance(table, {
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: 'fuzzy',
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
    autoResetAll: false,
  });
  useEffect(() => {
    if (instance.getState().columnFilters[0]?.id === 'fullName') {
      if (instance.getState().sorting[0]?.id !== 'fullName') {
        instance.setSorting([{ id: 'fullName', desc: false }]);
      }
    }
  }, [instance.getState().columnFilters[0]?.id]);
  return (
    <div>
      <table>
        <thead>
          {instance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHeading key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {header.renderHeader()}
                          <SortIconContainer>
                            {{
                              asc: '🔼',
                              desc: '🔽',
                            }[header.column.getIsSorted()] ?? null}
                          </SortIconContainer>
                        </div>
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter
                              column={header.column}
                              instance={instance}
                            />
                          </div>
                        ) : null}
                      </>
                    )}
                  </TableHeading>
                );
              })}
            </tr>
          ))}
        </thead>
        {data.length === 0 ? (
          <NoRecord>No records found</NoRecord>
        ) : (
          <tbody>
            {instance
              .getRowModel()
              .rows.slice(0, 10)
              .map((row) => {
                return (
                  <TableRow key={row.id} height="50px">
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableData key={cell.id}>
                          <div>{cell.renderCell()}</div>
                        </TableData>
                      );
                    })}
                  </TableRow>
                );
              })}
          </tbody>
        )}
      </table>
    </div>
  );
}

function Filter({ column, instance }) {
  const firstValue = instance
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );
  return (
    <FilterContainer>
      {typeof firstValue === 'number' ? (
        <div>
          <div>
            <DebouncedInput
              type="number"
              className="w-80"
              min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
              max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
              value={columnFilterValue?.[0] ?? ''}
              onChange={(value) =>
                column.setFilterValue((old) => [value, old?.[1]])
              }
              placeholder="Min"
            />
            <DebouncedInput
              type="number"
              className="w-80"
              min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
              max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
              value={columnFilterValue?.[1] ?? ''}
              onChange={(value) =>
                column.setFilterValue((old) => [old?.[0], value])
              }
              placeholder="Max"
            />
          </div>
        </div>
      ) : (
        <>
          {!restrictedDropDown.includes(column.id) && (
            <datalist id={column.id + 'list'}>
              {sortedUniqueValues.slice(0, 5000).map((value) => (
                <option value={value} key={value} />
              ))}
            </datalist>
          )}

          <DebouncedInput
            type="text"
            value={columnFilterValue ?? ''}
            onChange={(value) => column.setFilterValue(value)}
            placeholder={`Search ${column.id}`}
            list={column.id + 'list'}
          />
        </>
      )}
    </FilterContainer>
  );
}

export default ResponseTable;
